import React, { Component, PropTypes } from 'react';

export default class Link extends Component {

	// TODO -- Prop Validations
	static propTypes = {
		className: PropTypes.string,
		href: PropTypes.string,
		target: PropTypes.string,
		onClick: PropTypes.func,
		disabled: PropTypes.bool
	};

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (e) => {
		// if target is set (e.g. to "_blank"), let the browser handle it
		if (this.props.target || (this.props.href && this.props.href.indexOf('mailto:') === 0)) {
			return;
		}
		// if not a left click or is a special click, let the browser handle it
		if (e.button !== 0 || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
			return;
		}

		e.preventDefault();
		if (this.props.onClick && !this.props.disabled) {
			this.props.onClick(this.props.href);
		}
	};

	render() {
		const { className, onClick, ...p } = this.props; // Stripping off props we'd like to explicitly handle

		return (
			<a
				href={p.href}
				className={`link ${className}`}
				onClick={this.handleClick}
				{...p}
			>
				{ p.children }
			</a>
		);
	}
}
