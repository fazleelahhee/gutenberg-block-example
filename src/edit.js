import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { companyName, companyEmail } = attributes;
	const handleCompanyName = (val) => {
		setAttributes({ companyName: val });
	};

	const handleCompanyEmail = (val) => {
		setAttributes({ companyEmail: val });
	};

	return (
		<div {...useBlockProps()}>
			<h3>{ __( 'Company Name', 'gutenberg-examples' ) }</h3>
			<RichText
				tagName="p"
				placeholder={ __(
					'Please enter company name',
					'gutenberg-examples'
				) }
				value={ companyName }
				onChange={ handleCompanyName }
				className="company-name"
			/>

			<h3>{ __( 'Company Email', 'gutenberg-examples' ) }</h3>
			<RichText
				tagName="p"
				placeholder={ __(
					'Please enter company email',
					'gutenberg-examples'
				) }
				value={ companyEmail }
				onChange={ handleCompanyEmail }
				className="company-email"
			/>

		</div>
	);
}
