import React, { Component } from 'react'
import { SaladTheme } from '../../../SaladTheme'
import withStyles, { WithStyles } from 'react-jss'
import classnames from 'classnames'

const styles = (theme: SaladTheme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    padding: '0 1rem',
    userSelect: 'none',
  },
  supportButton: {
    color: theme.mediumGreen,
    padding: '.5rem 1rem',
    fontFamily: 'sharpGroteskLight25',
    fontSize: theme.small,
    letterSpacing: '1.3px',
    cursor: 'pointer',
  },
})

export class MenuItem {
  constructor(public readonly name: string, public readonly onClick: () => void) {}
}

interface Props extends WithStyles<typeof styles> {
  menuItems?: MenuItem[]
}

class _MenuBar extends Component<Props> {
  render() {
    const { menuItems, classes } = this.props
    return (
      <div className={classnames(classes.container)}>
        {menuItems &&
          menuItems.map(x => (
            <div key={x.name} className={classes.supportButton} onClick={() => x.onClick()}>
              {x.name}
            </div>
          ))}
      </div>
    )
  }
}

export const MenuBar = withStyles(styles)(_MenuBar)