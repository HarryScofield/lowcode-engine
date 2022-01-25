import React from "react";

import { Form, Input, NumberPicker, Select, Button } from "@alifd/next";

import utils, { RefsManager } from "../../utils";

import { i18n as _$$i18n } from "../../i18n";

import "./index.css";

class Test$$Page extends React.Component {
  constructor(props, context) {
    super(props);

    this.utils = utils;

    this._refsManager = new RefsManager();

    this.state = { text: "outter" };
  }

  $ = (refName) => {
    return this._refsManager.get(refName);
  };

  $$ = (refName) => {
    return this._refsManager.getAll(refName);
  };

  i18n = (i18nKey) => {
    return _$$i18n(i18nKey);
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    const __$$context = this;
    const { state } = this;
    return (
      <div ref={this._refsManager.linkRef("outterView")} autoLoading={true}>
        <Form
          labelCol={this.state.colNum}
          style={{}}
          ref={this._refsManager.linkRef("testForm")}
        >
          <Form.Item
            label={this.i18n("i18n-jwg27yo4")}
            name="name"
            initValue="李雷"
          >
            <Input placeholder="请输入" size="medium" style={{ width: 320 }} />
          </Form.Item>
          <Form.Item label="年龄：" name="age" initValue="22">
            <NumberPicker size="medium" type="normal" />
          </Form.Item>
          <Form.Item label="职业：" name="profession">
            <Select
              dataSource={[
                { label: "教师", value: "t" },
                { label: "医生", value: "d" },
                { label: "歌手", value: "s" },
              ]}
            />
          </Form.Item>
          <div style={{ textAlign: "center" }}>
            <Button.Group>
              <Button
                type="primary"
                style={{ margin: "0 5px 0 5px" }}
                htmlType="submit"
              >
                提交
              </Button>
              <Button
                type="normal"
                style={{ margin: "0 5px 0 5px" }}
                htmlType="reset"
              >
                重置
              </Button>
            </Button.Group>
          </div>
        </Form>
      </div>
    );
  }
}

export default Test$$Page;

function __$$createChildContext(oldContext, ext) {
  const childContext = {
    ...oldContext,
    ...ext,
  };
  childContext.__proto__ = oldContext;
  return childContext;
}
