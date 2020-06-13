export default class ViewController {
    constructor(){
        this.views = {};
        this.currentView = undefined;
    }

    addView(name, view){
        this.views[name] = view;
        if(!this.currentView) {
            this.currentView = name;
        }
    }

    selectView(name) {
        if(this.views[name]) {
            this.currentView = name;
            return true;
        }
        return false;
    }

    display() {
        this.views[this.currentView].display();
    }
}