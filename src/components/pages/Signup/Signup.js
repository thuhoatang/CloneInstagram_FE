import React, { Component } from 'react'
import routeDefault from '../../../config'
import Form from '../../Form/Form'
import FormSignUp from '../../Form/FormSignUp/FormSignUp'

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Form questionAccoutPropsForm="Bạn có tài khoản? "
            tagRedirectPropsForm="Đăng nhập"
            linkPropForm={routeDefault.signIn}>
          <FormSignUp/>
        </Form>
      </div>
    )
  }
}
