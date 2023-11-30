import { App } from "..";
// import Navigation from "../app/Nav/Nav";
// import Navigation from "../app/Nav/Nav";

// jest.mock('../app/Nav/Nav', () => {
//       return {
//             ...jest.requireActual('../app/Nav/Nav'),
//             mockAddEventListener: jest.fn()
//       }
// });
// jest.mock('../app/Home/HomePage');
// jest.mock('../app/Projects/ProjectPage');

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

// zmień modyfikatory dostępu w index.ts