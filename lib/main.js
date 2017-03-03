'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', 'run-in-iterm:run', this.run));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  run() {
    var self = this;
    var path = document.querySelector("[is=status-bar-file] .current-path").text;
    exec = require("child_process").exec;
    exec("osascript -e 'tell application \"iTerm\"' -e 'tell current session of current window' -e 'write text \"rspec " + path + "\"' -e 'end tell' -e 'end tell'", function(error, stdout, stderr) {
      var event = new Event('run-in-iterm');
      self.dispatchEvent(event);
      return;
    });
  }
};
