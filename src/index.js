import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import Save from './save';

registerBlockType("custom-block/contact-details", {
	// attributes: {
	// 	companyName: {
	// 		type: "string",
	// 		source: 'html',
    //     	selector: '.company-name'
	// 	},
	// 	CompanyEmail: {
	// 		type: "string",
	// 		source: 'html',
    //     	selector: '.company-email'
	// 	} 
	// },
	edit: Edit,
	save: Save,
});