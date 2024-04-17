import * as React from "react";
import { Meta, Story } from "@storybook/react";

import Toaster from "./Toaster";
import { ToasterProps } from "./ToasterProps";

export default {
  title: "Components/Toaster",
  component: Toaster,
} as Meta;

export const Base: Story<ToasterProps> = () => (
  <div>
    <div className="toaster is-info">
      <div className="icon">
        <i className="tri-infos-circle" aria-hidden="true"></i>
      </div>
      <div className="body">
        <p className="text is-level-1">
          <strong>Toaster Information</strong>
        </p>
        <p className="text is-level-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book..
        </p>
      </div>
      <span className="icon is-small toaster-close">
        <i className="tri-times" aria-hidden="true"></i>
      </span>
    </div>
    <div className="toaster is-success">
      <div className="icon" aria-label="Succès">
        <i className="tri-check-circle" aria-hidden="true"></i>
      </div>
      <div className="body">
        <p className="text is-level-1">
          <strong>Toaster Success</strong>
        </p>
        <p className="text is-level-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book..
        </p>
      </div>
      <span className="icon is-small toaster-close">
        <i className="tri-times" aria-hidden="true"></i>
      </span>
    </div>
    <div className="toaster is-warning">
      <div className="icon" aria-label="Attention">
        <i className="tri-alert" aria-hidden="true"></i>
      </div>
      <div className="body">
        <p className="text is-level-1">
          <strong>Toaster Warning</strong>
        </p>
        <p className="text is-level-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book..
        </p>
      </div>
      <span className="icon is-small toaster-close">
        <i className="tri-times" aria-hidden="true"></i>
      </span>
    </div>
    <div className="toaster is-error">
      <div className="icon" aria-label="Error">
        <i className="tri-exclamation-circle" aria-hidden="true"></i>
      </div>
      <div className="body">
        <p className="text is-level-1">
          <strong>Toaster Error</strong>
        </p>
        <p className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book..
        </p>
      </div>
      <span className="icon is-small toaster-close">
        <i className="tri-times" aria-hidden="true"></i>
      </span>
    </div>
  </div>
  /* CODE REACT :
            const onClickToaster = () => {
            show({
              position: ToasterPosition.BOTTOM,
              duration,
              offset,
              title,
              description,
              iconName: IconName.INFOS_CIRCLE,
              alert: AlertState.WARNING,
              onClick: () => console.log('onClick'),
              closable: () => console.log('closable'),
              onHide: () => console.log('onHide'),
            })
          }

          return (
            <div>
              <Button variant={'PRIMARY'} onClick={onClickToaster}>
                Open toast
              </Button>
            </div>
          )
        }
       <ToasterProvider iconName={IconName.TIMES} alert={AlertState.ERROR}>
          <ToasterView />
        </ToasterProvider>
  */
);
