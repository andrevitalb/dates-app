import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "components/home/home.component"
import { ListsComponent } from "components/lists/lists.component"
import { MemberDetailComponent } from "components/members/member-detail/member-detail.component"
import { MemberEditComponent } from "components/members/member-edit/member-edit.component"
import { MemberListComponent } from "components/members/member-list/member-list.component"
import { MessagesComponent } from "components/messages/messages.component"
import { NotFoundComponent } from "errors/not-found/not-found.component"
import { ServerErrorComponent } from "errors/server-error/server-error.component"
import { TestErrorComponent } from "errors/test-error/test-error.component"
import { authGuard } from "guards/auth.guard"
import { preventUnsavedChangesGuard } from "guards/prevent-unsaved-changes.guard"

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{
		path: "",
		runGuardsAndResolvers: "always",
		canActivate: [authGuard],
		children: [
			{ path: "members", component: MemberListComponent },
			{ path: "members/:username", component: MemberDetailComponent },
			{
				path: "members/edit",
				component: MemberEditComponent,
				canDeactivate: [preventUnsavedChangesGuard],
			},
			{ path: "messages", component: MessagesComponent },
			{ path: "lists", component: ListsComponent },
		],
	},
	{ path: "errors", component: TestErrorComponent },
	{ path: "not-found", component: NotFoundComponent },
	{ path: "server-error", component: ServerErrorComponent },
	{ path: "**", component: NotFoundComponent, pathMatch: "full" },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
