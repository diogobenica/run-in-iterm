'use babel';

import RspecCopy from '../lib/main';

describe('RunInIterm', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('rspec-copy');
  });

  describe('when the rspec-copy:toggle event is triggered', () => {
    it('hides and shows the modal panel', (done) => {
      workspaceElement.addEventListener('run-in-iterm', function() {
        // done();
      });

      atom.commands.dispatch(workspaceElement, 'run-in-iterm:run');
    });
  });
});
