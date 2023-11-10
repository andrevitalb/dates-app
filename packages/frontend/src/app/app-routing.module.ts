import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "components/home/home.component"
import { ListsComponent } from "components/lists/lists.component"
import { MemberDetailComponent } from "components/members/member-detail/member-detail.component"
import { MemberListComponent } from "components/members/member-list/member-list.component"
import { MessagesComponent } from "components/messages/messages.component"
import { TestErrorComponent } from "errors/test-error/test-error.component"
import { authGuard } from "guards/auth.guard"

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{
		path: "",
		runGuardsAndResolvers: "always",
		canActivate: [authGuard],
		children: [
			{ path: "members", component: MemberListComponent },
			{ path: "members/:id", component: MemberDetailComponent },
			{ path: "messages", component: MessagesComponent },
			{ path: "lists", component: ListsComponent },
		],
	},
	{ path: "errors", component: TestErrorComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
