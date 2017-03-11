import { Component, OnInit, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver,
    Input} from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

    @ViewChild('container', {read: ViewContainerRef}) widgetContainer:ViewContainerRef;

    constructor(private resolver:ComponentFactoryResolver) {
    }

    ngOnInit() {
    }

    @Input() set componentsList(componentsList:string[]) {
        this.injectComponents(componentsList);
    }

    /**
     * Components injector
     * @param componentsList array The list of components which should be injected dynamically
     */
    private injectComponents(componentsList:string[]):void {
        let factories = Array.from(this.resolver['_factories']);
        //going through the list of components and inject them
        componentsList.forEach((item) => {
            let factory = factories.find((component:any) => {
                return component[1].selector === item;
            });

            // if such component exists - inject it
            if (factory) {
                let factoryClass = factory[0];
                // create the factory of the component which is going to be injected
                let componentFactory = this.resolver.resolveComponentFactory(factoryClass);
                // inject the component
                let cmpRef = this.widgetContainer.createComponent(componentFactory);

                // get the instance of the injected component
                let instance:any = cmpRef.instance;

                // using the component's instance, you have access to its scope,
                // so you can change any property (which is public) of it
                // let's change the title property of the injected component after a couple of second
                // to see the effect.
                setTimeout(() => {
                    instance.title = 'New title defined by the injector component';
                }, 2000);

                console.log('The component ' + item + ' has been injected');
            }
            else {
                console.log('The component ' + item + ' doesn\'t exist');
            }
        });
    }
}
