import { App } from "..";

describe('App', () => {
      let app: App;

      beforeAll(() => {
            app = new App();
      })

      it('should create an instance of App', () => {
            expect(app).toBeInstanceOf(App);
      });

      it.skip('should initialize with setupNavigation', () => {
            expect(app.setupNavigation).toHaveBeenCalled();
      })


})
