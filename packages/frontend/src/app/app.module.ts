import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"
import { HomeComponent } from "components/home/home.component"
import { ListsComponent } from "components/lists/lists.component"
import { MemberListComponent } from "components/members/member-list/member-list.component"
import { MessagesComponent } from "components/messages/messages.component"
import { NavComponent } from "components/nav/nav.component"
import { RegisterComponent } from "components/register/register.component"
import { ErrorInterceptor } from "interceptors/error.interceptor"
import { JwtInterceptor } from "interceptors/jwt.interceptor"
import { SharedModule } from "modules/shared.module"
import { MemberCardComponent } from "./components/members/member-card/member-card.component"
import { NotFoundComponent } from "./errors/not-found/not-found.component"
import { ServerErrorComponent } from "./errors/server-error/server-error.component"
import { TestErrorComponent } from "./errors/test-error/test-error.component"

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		HomeComponent,
		RegisterComponent,
		MemberListComponent,
		ListsComponent,
		MessagesComponent,
		TestErrorComponent,
		NotFoundComponent,
		ServerErrorComponent,
		MemberCardComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		FormsModule,
		SharedModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: JwtInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
