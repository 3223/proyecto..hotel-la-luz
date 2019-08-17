import { RouterModule } from '@angular/router';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { AtraccionComponent } from './components/atraccion/atraccion.component';
import { PoliticaComponent } from './components/politica/politica.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TipohabComponent } from './components/tipohab/tipohab.component';
import { InfogenComponent } from './components/infogen/infogen.component';
import { ForpagoComponent } from './components/forpago/forpago.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { ReservacionusuarioComponent } from './components/reservacion/reservacionusuario/reservacionusuario.component';
export const appRoutes = [
   
    {
        path: 'habitacion', component: HabitacionComponent,
    },
    {
        path: 'atraccion', component: AtraccionComponent,
    }, 
    {
        path: 'politica', component: PoliticaComponent,
    },
    {
        path: 'contacto', component: ContactoComponent,
    }, 
    {
        path: 'tipohab', component: TipohabComponent,
    
    },
    {
        path: 'infogen', component: InfogenComponent,
    
    },{
        path: 'forpago', component: ForpagoComponent,
    },
    {
        path: 'usuario', component: UsuarioComponent,
    } ,
    {
        path:'ofertas', component: OfertasComponent,
    },
    {
    path:'paquetes', component: PaquetesComponent,
    },
    {
        path: 'reservacion', component: ReservacionComponent,
    },
    {
        path: 'reservacionusuario', component: ReservacionusuarioComponent,
    }]

    export const routing = RouterModule.forRoot(appRoutes);
