import React from 'react'
import { Breadcrumb, BreadcrumbItem } from './index'

const BreadcrumbExample: React.ReactNode =
  <Breadcrumb>
    <BreadcrumbItem href="https://google.fr">
      Google
    </BreadcrumbItem>
    <BreadcrumbItem to="#anchor">
      Parent avec ancre
    </BreadcrumbItem>
    <BreadcrumbItem>
      Parent
    </BreadcrumbItem>
    <BreadcrumbItem active>
      Page en cours
    </BreadcrumbItem>
  </Breadcrumb>

export default BreadcrumbExample;
