export default class BaseViewModel {
  
  // public get(_statusName: object) {
  //     return 
  // }

  protected async runWithAwareness(action: () => Promise<void>) {
    await action();
  }
}
