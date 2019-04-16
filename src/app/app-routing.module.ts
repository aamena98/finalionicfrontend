import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'attendance', loadChildren: './attendance/attendance.module#AttendancePageModule' },
  { path: 'notice', loadChildren: './notice/notice.module#NoticePageModule' },
  { path: 'parent-interaction', loadChildren: './parent-interaction/parent-interaction.module#ParentInteractionPageModule' },
  { path: 'interaction-display', loadChildren: './interaction-display/interaction-display.module#InteractionDisplayPageModule' },
  { path: 'teacher-interaction', loadChildren: './TeacherDashboard/teacher-interaction/teacher-interaction.module#TeacherInteractionPageModule' },
  { path: 'reply-page/:id', loadChildren: './reply-page/reply-page.module#ReplyPagePageModule' },
  { path: 'parent-chat-display', loadChildren: './parent-chat-display/parent-chat-display.module#ParentChatDisplayPageModule' },
  { path: 'leave', loadChildren: './leave/leave.module#LeavePageModule' },
  { path: 'leave-display', loadChildren: './TeacherDashboard/leave-display/leave-display.module#LeaveDisplayPageModule' },
  { path: 'exam-result', loadChildren: './exam-result/exam-result.module#ExamResultPageModule' },
  { path: 'my-demo', loadChildren: './my-demo/my-demo.module#MyDemoPageModule' },
  { path: 'student-reply-page/:id', loadChildren: './student-reply-page/student-reply-page.module#StudentReplyPagePageModule' },
  { path: 'parent-dash-board-page', loadChildren: './parent-dash-board-page/parent-dash-board-page.module#ParentDashBoardPagePageModule' },
  { path: 'login-page', loadChildren: './login-page/login-page.module#LoginPagePageModule' },
  { path: 'profile-page', loadChildren: './profile-page/profile-page.module#ProfilePagePageModule' },
  { path: 'student-timetable', loadChildren: './student-timetable/student-timetable.module#StudentTimetablePageModule' },
  { path: 'notes', loadChildren: './notes/notes.module#NotesPageModule' },
  { path: 'forget-password', loadChildren: './forget-password/forget-password.module#ForgetPasswordPageModule' },
  { path: 'home-work', loadChildren: './home-work/home-work.module#HomeWorkPageModule' },
  { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordPageModule' },
  { path: 'holidays', loadChildren: './holidays/holidays.module#HolidaysPageModule' },
  { path: 'teacher-dashboarf', loadChildren: './teacher-dashboarf/teacher-dashboarf.module#TeacherDashboarfPageModule' },
  { path: 'take-attendance', loadChildren: './take-attendance/take-attendance.module#TakeAttendancePageModule' },
  { path: 'add-homework', loadChildren: './add-homework/add-homework.module#AddHomeworkPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
