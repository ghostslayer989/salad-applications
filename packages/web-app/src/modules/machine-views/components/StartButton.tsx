import React, { Component } from 'react'
import withStyles, { WithStyles } from 'react-jss'
import { SaladTheme } from '../../../SaladTheme'
import { AngledPanel, Tooltip } from '../../../components'
import classnames from 'classnames'
// @ts-ignore
import ReactHintFactory from 'react-hint'
import { StartButtonText } from './StartButtonText'

const ReactHint = ReactHintFactory(React)

const styles = (theme: SaladTheme) => ({
  container: {
    height: '107px',
    width: '350px',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.darkBlue,
    borderColor: theme.green,
    borderWidth: '1px',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    whiteSpace: 'noWrap',
    position: 'relative',
    userSelect: 'none',
  },
  button: {
    backgroundColor: theme.green,
    height: '107px',
    width: '147px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 100,
    '&:hover': {
      opacity: 0.9,
    },
  },
  disabledButton: {
    cursor: 'not-allowed',
  },
  buttonText: {
    color: theme.darkBlue,
    textAlign: 'center',
    fontSize: theme.small,
    fontFamily: 'sharpGroteskMedium25',
    textTransform: 'uppercase',
  },
  textContainer: {
    display: 'flex',
    textAlign: 'right',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: '.5rem 1rem',
    whiteSpace: 'noWrap',
    color: theme.lightGreen,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 50,
    letterSpacing: '1.5px',
  },
  infoCorner: {
    position: 'absolute',
    top: 0,
    left: 2,
    backgroundColor: '#F6931D',
    height: '25px',
    width: '29.17px',
    clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
    textAlign: 'center',
  },
  title: {
    fontFamily: theme.fontGroteskLight25,
    fontSize: 11,
    textTransform: 'uppercase',
  },
  balanceText: {
    fontFamily: theme.fontGroteskLight09,
    color: theme.green,
    fontSize: theme.xLarge,
    marginTop: -6,
    marginBottom: -2,
  },
  subTitle: {
    fontFamily: theme.fontGroteskLight25,
    fontSize: 8,
    textTransform: 'uppercase',
  },
  subText: {
    color: theme.green,
    fontFamily: theme.fontGroteskLight25,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  '@keyframes animated': {
    '0%': {
      filter: `drop-shadow( -10px 0px 3px ${theme.mediumGreen})`,
    },
    '100%': {
      filter: `drop-shadow( -10px 0px 5px ${theme.darkGreen})`,
    },
  },
  runningGlow: {
    animationName: '$animated',
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
  },
})

interface Props extends WithStyles<typeof styles> {
  currentBalance?: number
  lifetimeBalance?: number
  earningRate?: number
  isRunning?: boolean
  status?: string
  onClick?: () => void
  startEnabled?: boolean
}

class _StartButton extends Component<Props> {
  handleClick = () => {
    const { onClick, startEnabled } = this.props

    if (onClick && startEnabled) onClick()
  }
  render() {
    const { currentBalance, lifetimeBalance, earningRate, status, isRunning, startEnabled, classes } = this.props
    return (
      <>
        <ReactHint
          autoPosition
          events
          attribute="data-start-button"
          onRenderContent={() => (
            <div>
              <Tooltip
                title="Incompatible Machine"
                text="Looks like your machine doesn't like Salad.
                 Please check your GPU and Windows version to ensure they
                  are compatible with Salad. All hope is NOT lost, check 
                  out the 'Earn' tab for more info."
              />
            </div>
          )}
        />
        <div
          className={classnames({
            [classes.runningGlow]: isRunning,
          })}
        >
          <AngledPanel leftSide="left" className={classnames(classes.container)}>
            <AngledPanel
              leftSide="left"
              rightSide="left"
              className={classnames(classes.button, { [classes.disabledButton]: !startEnabled })}
              onClick={this.handleClick}
            >
              {!startEnabled && (
                <div data-start-button className={classes.infoCorner}>
                  !!
                </div>
              )}
              <div className={classes.buttonText}>{isRunning ? 'Stop' : 'Start'}</div>
            </AngledPanel>
            <div className={classes.textContainer}>
              <StartButtonText
                textOptions={[
                  { title: 'Current Balance', value: `$${currentBalance ? currentBalance.toFixed(5) : 0}` },
                  { title: 'Lifetime Balance', value: `$${lifetimeBalance ? lifetimeBalance.toFixed(5) : 0}` },
                  {
                    title: 'Earning Rate',
                    value: `${earningRate === undefined ? 'Loading' : `$${(earningRate * 86400).toFixed(3)}/day`}`,
                  },
                ]}
              />
              {/* Earning rate  {earningRate === undefined ? 'Loading' : `$${(earningRate * 86400).toFixed(3)}/day`} */}
              <div className={classes.subTitle}>Status</div>
              <div className={classes.subText}>{status || 'Stopped'}</div>
            </div>
          </AngledPanel>
        </div>
      </>
    )
  }
}

export const StartButton = withStyles(styles)(_StartButton)
