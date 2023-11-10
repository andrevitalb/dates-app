import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { ToastrService } from "ngx-toastr"
import { AccountService } from "services/account.service"

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
	@Output() cancelRegister = new EventEmitter()
	model: any = {}

	constructor(
		private accountService: AccountService,
		private toastr: ToastrService,
	) {}

	ngOnInit() {}

	register() {
		this.accountService.register(this.model).subscribe({
			next: () => this.cancel(),
			error: (error) => this.toastr.error(error.error),
		})
	}

	cancel() {
		this.cancelRegister.emit(false)
	}
}
