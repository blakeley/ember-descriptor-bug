# Ember-descriptor-bug

## Instructions to reproduce this bug

* `git clone <repository-url>`
* change into the new directory
* `npm install`
* `bower install`
* `ember server`
* Visit this app at [http://localhost:4200](http://localhost:4200).

Compare console output with the HTML: `object.descriptorValue` does not display anything. Downgrade to Ember 1.8.0 and it will display its value correctly.
