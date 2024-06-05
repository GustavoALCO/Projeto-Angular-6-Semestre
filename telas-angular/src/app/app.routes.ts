import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { ShopComponent } from './pages/shop/shop.component';
import { HomeAdmComponent } from './pages/home-adm/home-adm.component';
import { InputAdminComponent } from './pages/input-admin/input-admin.component';
import path from 'node:path';
import { ListAdmComponent } from './pages/list-adm/list-adm.component';


export const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'produto/:idProduto', component: InfoComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'admin',component: HomeAdmComponent},
    {path: 'admin/criarProduto',component:InputAdminComponent},
    {path: 'admin/alterarProduto/:idProduto',component:InputAdminComponent},
    {path: 'admin/listaProdutos', component: ListAdmComponent}
];
