import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { BsDropdownModule } from "ngx-bootstrap/dropdown"
import { TabsModule } from "ngx-bootstrap/tabs"
import { NgxSpinnerModule } from "ngx-spinner"
import { ToastrModule } from "ngx-toastr"

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		BsDropdownModule.forRoot(),
		TabsModule.forRoot(),
		ToastrModule.forRoot({
			timeOut: 10000,
			positionClass: "toast-bottom-right",
			preventDuplicates: true,
			progressBar: true,
    }),
    NgxSpinnerModule.forRoot({
      type: "ball-scale-multiple",
    }),
	],
	exports: [BsDropdownModule, TabsModule, ToastrModule, NgxSpinnerModule],
})
export class SharedModule {}
