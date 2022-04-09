import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

/**
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { companyName, companyEmail } = attributes;

	return (
		<div {...blockProps}>
			<h3>{__("Company Name", "gutenberg-examples")}</h3>
			<RichText.Content
				tagName="p"
				className="company-name"
				value={companyName}
			/>

			<h3>{__("Company Email", "gutenberg-examples")}</h3>
			<RichText.Content
				tagName="p"
				className="company-email"
				value={companyEmail}
			/>
		</div>
	);
}
