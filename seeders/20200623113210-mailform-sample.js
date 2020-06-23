'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('MailForms', [{
        title: 'Lorem ipsum dolor sit amet',
        type: 'meeting',
        pass: true,
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in viverra ex, a pulvinar felis. Suspendisse a purus gravida, rutrum sem nec, hendrerit diam. Sed rhoncus venenatis dapibus. Integer in justo ante. In molestie vestibulum urna in efficitur. Mauris non faucibus dolor. Nam vulputate sed dolor id maximus. Integer placerat leo quis felis dictum venenatis. Nulla sed dui non odio euismod consectetur. Mauris placerat iaculis nibh et imperdiet.',
        header_image: 'https://picsum.photos/500/100',
        map_image: 'https://picsum.photos/500/300',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: 'consectetur adipiscing elit',
        type: 'meeting',
        pass: false,
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in viverra ex, a pulvinar felis. Suspendisse a purus gravida, rutrum sem nec, hendrerit diam. Sed rhoncus venenatis dapibus. Integer in justo ante. In molestie vestibulum urna in efficitur. Mauris non faucibus dolor. Nam vulputate sed dolor id maximus. Integer placerat leo quis felis dictum venenatis. Nulla sed dui non odio euismod consectetur. Mauris placerat iaculis nibh et imperdiet.',
        header_image: 'https://picsum.photos/500/100',
        map_image: 'https://picsum.photos/500/300',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: 'Duis in viverra ex',
        type: 'document',
        pass: true,
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in viverra ex, a pulvinar felis. Suspendisse a purus gravida, rutrum sem nec, hendrerit diam. Sed rhoncus venenatis dapibus. Integer in justo ante. In molestie vestibulum urna in efficitur. Mauris non faucibus dolor. Nam vulputate sed dolor id maximus. Integer placerat leo quis felis dictum venenatis. Nulla sed dui non odio euismod consectetur. Mauris placerat iaculis nibh et imperdiet.',
        header_image: 'https://picsum.photos/500/100',
        map_image: 'https://picsum.photos/500/300',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: 'a pulvinar felis',
        type: 'document',
        pass: false,
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in viverra ex, a pulvinar felis. Suspendisse a purus gravida, rutrum sem nec, hendrerit diam. Sed rhoncus venenatis dapibus. Integer in justo ante. In molestie vestibulum urna in efficitur. Mauris non faucibus dolor. Nam vulputate sed dolor id maximus. Integer placerat leo quis felis dictum venenatis. Nulla sed dui non odio euismod consectetur. Mauris placerat iaculis nibh et imperdiet.',
        header_image: 'https://picsum.photos/500/100',
        map_image: 'https://picsum.photos/500/300',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('MailForms', null, {});
  }
};
