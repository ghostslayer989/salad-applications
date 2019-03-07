import React, { CSSProperties } from 'react'
// @ts-ignore
import withStyles, { WithStyles } from 'react-jss'
import { SaladTheme } from '../SaladTheme'
import classnames from 'classnames'

const styles = (theme: SaladTheme) => ({
  container: {
    position: 'relative',
    backgroundColor: 'lightGrey',
    height: '1rem',
  },
  bar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: (props: Props) => (props.progress ? `${props.progress}%` : '0'),
    backgroundColor: (props: Props) => (props.barColor ? props.barColor : 'grey'),
  },
})

interface Props extends WithStyles<typeof styles> {
  barColor?: string
  progress?: number
  barClassName?: string
  className?: string
  style?: CSSProperties
}

const _ProgressBar = ({ style, className, barClassName, classes }: Props) => (
  <div style={style} className={classnames(classes.container, className)}>
    <div className={classnames(barClassName, classes.bar)} />
  </div>
)

export const ProgressBar = withStyles(styles)(_ProgressBar)