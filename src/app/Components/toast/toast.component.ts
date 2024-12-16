import { Component, inject} from '@angular/core';
import { NgbToast, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../Services/toast.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, NgbToastModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent{

 toastService = inject(ToastService)

}
