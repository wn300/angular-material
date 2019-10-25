import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UiIndexComponent } from "./pages/index/ui-index/ui-index.component";
import { UiOperationComponent } from "./pages/operation/ui-operation/ui-operation.component";
import { UiTraceabilityComponent } from './pages/traceability/ui-traceability/ui-traceability.component';
import { UiUsersComponent } from './pages/users/ui-users/ui-users.component';
import { UiProgramationComponent } from './pages/programation/ui-programation/ui-programation.component';

const routes: Routes = [
  {
    path: "index",
    component: UiIndexComponent,
    data: { title: "Inicio" }
  },
  {
    path: "users",
    component: UiUsersComponent,
    data: { title: "Usuarios" }
  },
  {
    path: "programation",
    component: UiProgramationComponent,
    data: { title: "Programacion" }
  },
  {
    path: "operation",
    component: UiOperationComponent,
    data: { title: "Operación" }
  },
  {
    path: "traceability",
    component: UiTraceabilityComponent,
    data: { title: "Trazabilidad" }
  },
  {
    path: "",
    redirectTo: "/index",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
