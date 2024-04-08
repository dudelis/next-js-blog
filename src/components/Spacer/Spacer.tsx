import * as React from 'react';
import styles from './spacer.module.css'

export interface ISpacerProps {
}

export const Spacer = (props: ISpacerProps) => <div className={styles.spacer} aria-hidden="true" />
