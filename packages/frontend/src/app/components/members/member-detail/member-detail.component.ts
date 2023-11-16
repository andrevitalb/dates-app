import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { IMember } from "interfaces/member"
import { GalleryItem, GalleryModule, ImageItem } from "ng-gallery"
import { TabsModule } from "ngx-bootstrap/tabs"
import { MembersService } from "services/members.service"

@Component({
	selector: "app-member-detail",
	standalone: true,
	templateUrl: "./member-detail.component.html",
	styleUrls: ["./member-detail.component.scss"],
	imports: [CommonModule, TabsModule, GalleryModule],
})
export class MemberDetailComponent implements OnInit {
	member: IMember | undefined
	images: GalleryItem[] = []

	constructor(
		private membersService: MembersService,
		private route: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.loadMember()
	}

	loadMember() {
		const username = this.route.snapshot.paramMap.get("username")
		if (!username) return
		this.membersService.getMember(username).subscribe({
			next: (member) => {
				this.member = member
				this.getImages()
			},
		})
	}

	getImages() {
		if (!this.member) return
		this.member.photos.forEach((photo) => {
			this.images.push(new ImageItem({ src: photo.url, thumb: photo.url }))
		})
	}
}
