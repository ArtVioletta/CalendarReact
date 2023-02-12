import React, {FC} from 'react';
import {Layout, Row, Menu} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
  const router = useHistory()
  const {isAuth, user} = useTypedSelector(state => state.auth)
  const {logout} = useActions()

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth
          ?
          <>
            <div style={{color: 'white'}}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={true} 
                  items={[{key:1, title: 'Go out', onClick:logout}]}/>
          </>
          :
          <Menu theme="dark" mode="horizontal" selectable={false}
                items={[{key:1, title: 'Login', onClick:() => router.push(RouteNames.LOGIN)}]}/>
        }
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
