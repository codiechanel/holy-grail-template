import * as React from "react";
import * as PropTypes from "prop-types";
import classnames from 'classnames';

// MyIcon.propTypes = {
//     path: PropTypes.string,
//     default: PropTypes.bool
// };

type MyIconProp = {
    icon: string;
    className?: string;
};

export  default function MyIcon(props:MyIconProp ) {
    let {
        className,
        icon,

        ...otherProps
    } = props
    const classes = classnames('material-icons', className,);
    return (<i className={classes} {...otherProps}>
        {icon}
    </i>)

}
