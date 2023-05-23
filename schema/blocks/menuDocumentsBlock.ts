import {BlockConfig} from '@sitebud/sdk-lib';

export const menuDocumentsBlock: BlockConfig = {
    label: 'Menu Documents Block',
    description: 'A structured menu of hyperlinks connecting key pages of this website.',
    imageName: 'menu-documents-block.webp',
    components: {
        menuDocuments: {
            indexNumber: 0,
            label: 'Menu Documents',
            helpText: 'A structured menu of hyperlinks connecting key pages of this website.',
            imageName: 'menu-documents-block.webp',
            props: {
                documentsList: {
                    indexNumber: 0,
                    type: 'DocumentsList',
                    isRequired: true,
                    fieldContent: {
                        selectionMode: 'selectDocuments',
                    }
                },
            }
        }
    }
};
