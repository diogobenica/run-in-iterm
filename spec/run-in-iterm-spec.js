'use babel';

import RspecCopy from '../lib/main';

describe('RunInIterm', function() {
  let workspaceElement;

  beforeEach(function() {
    workspaceElement = atom.views.getView(atom.workspace);
    atom.packages.activatePackage('run-in-iterm');
  });

  describe('when the run-in-iterm:run event is triggered', function() {
    it('run command on iTerm and send event', function() {
      waitsFor('event', function(done) {
        workspaceElement.addEventListener('run-in-iterm:run', function() {
          done();
        });

        atom.commands.dispatch(workspaceElement, 'run-in-iterm:run');
      });
    });
  });
});
