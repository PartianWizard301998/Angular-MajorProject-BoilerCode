import{a as Y}from"./chunk-LR3X462I.js";import{a as G,c as H}from"./chunk-YF6KXD7F.js";import"./chunk-CKMECCOM.js";import{a as B}from"./chunk-WKARZEKO.js";import{a as U}from"./chunk-CUW4NMGD.js";import{a as R,b as m,c as z,d as A,e as W,f as J,g as V,i as L,j}from"./chunk-PB7YHNDR.js";import{g as q,h as O,j as D}from"./chunk-N4FCLWEU.js";import{a as Q}from"./chunk-QE4YD5XR.js";import"./chunk-5J55P6B7.js";import{a as $}from"./chunk-BGDBGTYA.js";import{l as M,n as x}from"./chunk-CITMWSHZ.js";import{$ as N,Db as o,Hb as T,Sa as n,ea as u,hb as d,ja as F,jb as a,ka as I,nb as t,ob as i,pb as c,ub as P}from"./chunk-NXHE66ZE.js";var K=(()=>{class e{static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275mod=I({type:e})}static{this.\u0275inj=N({imports:[x,G]})}}return e})();function X(e,s){e&1&&(t(0,"div",28),o(1,"*FirstName is required"),i())}function ee(e,s){e&1&&(t(0,"div",28),o(1,"*LastName is required"),i())}function re(e,s){e&1&&(t(0,"div",28),o(1,"*UserName is required"),i())}function te(e,s){e&1&&(t(0,"div",28),o(1,"*Phone is required"),i())}function ie(e,s){e&1&&(t(0,"div",28),o(1,"*Enter Correct Phone no."),i())}function oe(e,s){e&1&&(t(0,"div",28),o(1,"*Enter Valid Email"),i())}function ne(e,s){e&1&&(t(0,"div",28),o(1,"*Email is required"),i())}function ae(e,s){e&1&&(t(0,"div",28),o(1,"*Password is required"),i())}function se(e,s){e&1&&(t(0,"div",28),o(1,"*Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one digit, and one special character. "),i())}function ce(e,s){e&1&&(t(0,"div",28),o(1,"*Password is required"),i())}function me(e,s){e&1&&(t(0,"div",28),o(1,"*Password did Not matched."),i())}function le(e,s){e&1&&(t(0,"div",29),o(1,"*Passwords match."),i())}var He=(()=>{class e{constructor(){this.fb=u(L),this.router=u(q),this.authService=u(Q),this.dialog=u(H),this.toastService=u($),this.isLoading=!1}ngOnInit(){this.registerForm=this.fb.group({firstName:["",m.required],lastName:["",m.required],userName:["",m.required],email:["",m.compose([m.required,m.email])],phone:["",[m.required,m.pattern("^((\\+91-?) |0)?[0-9]{10}$")]],password:["",[m.required,U()]],confirmpassword:["",m.required]},{validator:B("password","confirmpassword")})}registerUser(){this.registerForm.valid?(localStorage.setItem("email",this.registerForm.value.email),this.authService.registerService(this.registerForm.value).subscribe(l=>{l&&l.message?(alert(l.message),this.dialog.open(Y).afterClosed().subscribe(r=>{r&&(this.toastService.show(r.message,{type:"success",autohide:!0,showClose:!0}),localStorage.removeItem("email"),this.router.navigate(["/login"]))})):this.toastService.show(l.message,{type:"error",autohide:!0,showClose:!0})},l=>{console.error("Error:",l.error.message)})):console.log("Form is not valid.")}static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275cmp=F({type:e,selectors:[["app-joinus"]],standalone:!0,features:[T],decls:55,vars:13,consts:[[1,"container"],[1,""],[1,"px-4","py-5","px-md-5","text-center","text-lg-start"],[1,"row","gx-lg-5","align-items-center"],[1,"col-lg-6","mb-5","mb-lg-0"],[1,"my-5","display-3","fw-bold","ls-tight"],[1,"text-primary"],[2,"color","hsl(217, 10%, 50.8%)"],[1,"card"],[1,"card-body","py-5","px-md-5"],[3,"formGroup"],[1,"row"],[1,"col-md-6","mb-3"],["type","text","formControlName","firstName","placeholder","First Name",1,"form-control","form-control-sm"],["Class","text-danger mt-2",4,"ngIf"],["type","text","formControlName","lastName","placeholder","Last Name",1,"form-control","form-control-sm"],[1,"mb-3"],["type","text","formControlName","userName","placeholder","Username",1,"form-control","form-control-sm"],["type","phone","formControlName","phone","placeholder","Phone",1,"form-control","form-control-sm"],["type","email","formControlName","email","placeholder","Email Address",1,"form-control","form-control-sm"],["type","password","formControlName","password","placeholder","Password",1,"form-control","form-control-sm"],["type","password","formControlName","confirmpassword","placeholder","Confirm Password",1,"form-control","form-control-sm"],["Class","text-success mt-2",4,"ngIf"],[1,"form-check","d-flex","justify-content-center","mb-4"],["type","checkbox","checked","",1,"form-check-input","me-2"],[1,"form-check-label"],["type","submit",1,"btn","btn-primary","btn-block","mb-4",3,"click"],["routerLink","/login",2,"text-decoration","none"],["Class","text-danger mt-2"],["Class","text-success mt-2"]],template:function(p,r){if(p&1&&(t(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"div",4)(6,"h1",5),o(7," The best offer "),c(8,"br"),t(9,"span",6),o(10,"for your business"),i()(),t(11,"p",7),o(12," Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora at cupiditate quis eum maiores libero veritatis? Dicta facilis sint aliquid ipsum atque? "),i()(),t(13,"div",4)(14,"div",8)(15,"div",9)(16,"form",10)(17,"h2"),o(18,"Sign Up"),i(),t(19,"div",11)(20,"div",12),c(21,"input",13),d(22,X,2,0,"div",14),i(),t(23,"div",12),c(24,"input",15),d(25,ee,2,0,"div",14),i()(),t(26,"div",16),c(27,"input",17),d(28,re,2,0,"div",14),i(),t(29,"div",16),c(30,"input",18),d(31,te,2,0,"div",14)(32,ie,2,0,"div",14),i(),t(33,"div",16),c(34,"input",19),d(35,oe,2,0,"div",14)(36,ne,2,0,"div",14),i(),t(37,"div",16),c(38,"input",20),d(39,ae,2,0,"div",14)(40,se,2,0,"div",14),i(),t(41,"div",16),c(42,"input",21),d(43,ce,2,0,"div",14)(44,me,2,0,"div",14)(45,le,2,0,"div",22),i(),t(46,"div",23),c(47,"input",24),t(48,"label",25),o(49,"Subscribe to our newsletter"),i()(),t(50,"button",26),P("click",function(){return r.registerUser()}),o(51,"Sign up"),i(),t(52,"div")(53,"a",27),o(54," Existing User? Login "),i()()()()()()()()()()()),p&2){let g,f,_,h,v,y,b,w,S,C,E,k;n(16),a("formGroup",r.registerForm),n(6),a("ngIf",((g=r.registerForm.get("firstName"))==null?null:g.touched)&&((g=r.registerForm.get("firstName"))==null?null:g.hasError("required"))),n(3),a("ngIf",((f=r.registerForm.get("lastName"))==null?null:f.touched)&&((f=r.registerForm.get("lastName"))==null?null:f.hasError("required"))),n(3),a("ngIf",((_=r.registerForm.get("userName"))==null?null:_.touched)&&((_=r.registerForm.get("userName"))==null?null:_.hasError("required"))),n(3),a("ngIf",((h=r.registerForm.get("phone"))==null?null:h.touched)&&((h=r.registerForm.get("phone"))==null?null:h.hasError("required"))),n(),a("ngIf",((v=r.registerForm.get("phone"))==null?null:v.touched)&&((v=r.registerForm.get("phone"))==null?null:v.hasError("pattern"))),n(3),a("ngIf",((y=r.registerForm.get("email"))==null?null:y.touched)&&((y=r.registerForm.get("email"))==null?null:y.hasError("email"))),n(),a("ngIf",((b=r.registerForm.get("email"))==null?null:b.touched)&&((b=r.registerForm.get("email"))==null?null:b.hasError("required"))),n(3),a("ngIf",((w=r.registerForm.get("password"))==null?null:w.touched)&&((w=r.registerForm.get("password"))==null?null:w.hasError("required"))),n(),a("ngIf",((S=r.registerForm.get("password"))==null?null:S.touched)&&((S=r.registerForm.get("password"))==null?null:S.hasError("invalidPassword"))),n(3),a("ngIf",((C=r.registerForm.get("confirmpassword"))==null?null:C.touched)&&((C=r.registerForm.get("confirmpassword"))==null?null:C.hasError("required"))),n(),a("ngIf",((E=r.registerForm.get("confirmpassword"))==null?null:E.touched)&&((E=r.registerForm.get("confirmpassword"))==null?null:E.hasError("confirmPasswordValidator"))),n(),a("ngIf",((k=r.registerForm.get("confirmpassword"))==null?null:k.touched)&&!((k=r.registerForm.get("confirmpassword"))!=null&&k.hasError("confirmPasswordValidator")))}},dependencies:[x,M,j,W,R,z,A,J,V,D,O,K],styles:[".text-danger[_ngcontent-%COMP%], .text-success[_ngcontent-%COMP%]{font-size:small;text-align:left}.spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:#ffffffb3;z-index:1000}"]})}}return e})();export{He as default};
