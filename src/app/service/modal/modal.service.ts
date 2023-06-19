import { Injectable } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    closeResult: string | undefined;

    constructor(public ngbModal: NgbModal) { }

    open(content: any) {
        this.ngbModal
            .open(content, {
                ariaLabelledBy: 'modal-basic-title',
                windowClass: 'modal-bms',
                backdropClass: 'ngb-modal-backdrop',

                // backdrop:false
            })
            .result.then(
                (result) => {
                    this.closeResult = `Closed with: ${result}`;
                    console.log(this.closeResult);
                },
                (reason) => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                }
            );
        window.document.body.click();
    }

    openLg(contentlg: any, size?: string | undefined, centered: boolean = false) {
        console.log();
        this.ngbModal
            .open(contentlg, {
                ariaLabelledBy: 'modal-basic-title',
                windowClass: 'modal-bms',
                size: size ? size : 'lg',
                centered: centered,
                backdropClass: 'ngb-modal-backdrop',

                // backdrop:false,
            })
            .result.then(
                (result) => {
                    this.closeResult = `Closed with: ${result}`;
                    console.log(this.closeResult);
                },
                (reason) => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                    if (this.closeResult.includes('by clicking on a backdrop')) {
                        // this.openLg(contentlg);
                        return;
                    }
                }
            );
        window.document.body.click();
    }

    public getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    dismissAll() {
        this.ngbModal.dismissAll();
    }
}
