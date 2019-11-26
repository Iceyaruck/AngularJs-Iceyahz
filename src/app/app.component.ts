import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    colorGray = "#8B8383";
    colorOrange = "#FE5D20";
    colorWhite = "#ffff"
    logoPath = "assets/image/logo-2.png";  
    profileImage = "assets/image/profile.png";
    displayName = "ธนาธร จึงรุ่งเรืองกิจ";
    position = "หัวหน้าพรรค";
    ssType = "บัญชีรายชื่อ";
    insideContactTel = "245-8";
    insideContactMail = "thanathorn.eak@fwp.org";
    password = "1212312121";
}
