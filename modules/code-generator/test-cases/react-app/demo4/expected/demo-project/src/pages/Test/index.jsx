import React from "react";

import {
  Page as NextPage,
  Block as NextBlock,
  P as NextP,
  Text as NextText,
} from "@alife/container/lib/index.js";

import { AliSearchTable as AliSearchTableExport } from "@alife/mc-assets-1935/build/lowcode/index.js";

import { createFetchHandler as __$$createFetchRequestHandler } from "@alilc/lowcode-datasource-fetch-handler";

import { create as __$$createDataSourceEngine } from "@alilc/lowcode-datasource-engine/runtime";

import utils, { RefsManager } from "../../utils";

import { i18n as _$$i18n } from "../../i18n";

import "./index.css";

const NextBlockCell = NextBlock.Cell;

const AliSearchTable = AliSearchTableExport.default;

class Test$$Page extends React.Component {
  _dataSourceConfig = this._defineDataSourceConfig();
  _dataSourceEngine = __$$createDataSourceEngine(this._dataSourceConfig, this, {
    runtimeConfig: true,
    requestHandlersMap: { fetch: __$$createFetchRequestHandler() },
  });

  get dataSourceMap() {
    return this._dataSourceEngine.dataSourceMap || {};
  }

  reloadDataSource = async () => {
    await this._dataSourceEngine.reloadDataSource();
  };

  constructor(props, context) {
    super(props);

    this.utils = utils;

    this._refsManager = new RefsManager();

    this.state = { text: "outter", isShowDialog: false };
  }

  $ = (refName) => {
    return this._refsManager.get(refName);
  };

  $$ = (refName) => {
    return this._refsManager.getAll(refName);
  };

  _defineDataSourceConfig() {
    const _this = this;
    return {
      list: [
        {
          type: "fetch",
          isInit: function () {
            return true;
          },
          options: function () {
            return {
              params: {},
              method: "GET",
              isCors: true,
              timeout: 5000,
              headers: {},
              uri: "https://mocks.alibaba-inc.com/mock/jjpin/user/list",
            };
          },
          id: "users",
        },
      ],
    };
  }

  i18n = (i18nKey) => {
    return _$$i18n(i18nKey);
  };

  componentWillUnmount() {
    console.log("will umount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state);
  }

  testFunc() {
    console.log("test func");
  }

  onClick() {
    this.setState({
      isShowDialog: true,
    });
  }

  closeDialog() {
    this.setState({
      isShowDialog: false,
    });
  }

  onSearch(values) {
    console.log("search form:", values);
    console.log(this.dataSourceMap);
    this.dataSourceMap["users"].load(values);
  }

  onClear() {
    console.log("form reset");
    this.setState({
      isShowDialog: true,
    });
  }

  onPageChange(page, pageSize) {
    console.log(`page: ${page}, pageSize: ${pageSize}`);
  }

  componentDidMount() {
    this._dataSourceEngine.reloadDataSource();

    console.log("did mount");
  }

  render() {
    const __$$context = this;
    const { state } = this;
    return (
      <div
        ref={this._refsManager.linkRef("outterView")}
        style={{ height: "100%" }}
      >
        <NextPage
          columns={12}
          placeholderStyle={{ gridRowEnd: "span 1", gridColumnEnd: "span 12" }}
          placeholder="页面主体内容：拖拽Block布局组件到这里"
          header={
            <NextP
              wrap={true}
              type="body2"
              verAlign="middle"
              textSpacing={true}
              align="left"
              flex={true}
            >
              <NextText type="h5">员工列表</NextText>
            </NextP>
          }
          headerTest={[]}
          headerProps={{ background: "surface" }}
          footer={null}
          minHeight="100vh"
        >
          <NextBlock
            prefix="next-"
            placeholderStyle={{ height: "100%" }}
            noPadding={false}
            noBorder={false}
            background="surface"
            colSpan={12}
            rowSpan={1}
            childTotalColumns="1fr"
          >
            <NextBlockCell
              title=""
              primaryKey="732"
              prefix="next-"
              placeholderStyle={{ height: "100%" }}
              colSpan={1}
              rowSpan={1}
            >
              <NextP
                wrap={true}
                type="body2"
                textSpacing={true}
                verAlign="center"
                align="flex-start"
                flex={true}
              >
                <AliSearchTable
                  dataSource={this.state.users.data}
                  rowKey="workid"
                  columns={[
                    { title: "花名", dataIndex: "cname" },
                    { title: "user_id", dataIndex: "workid" },
                    { title: "部门", dataIndex: "dep" },
                  ]}
                  searchItems={[
                    { label: "姓名", name: "cname" },
                    { label: "部门", name: "dep" },
                  ]}
                  onSearch={function () {
                    return this.onSearch.apply(
                      this,
                      Array.prototype.slice.call(arguments).concat([])
                    );
                  }.bind(this)}
                  onClear={function () {
                    return this.onClear.apply(
                      this,
                      Array.prototype.slice.call(arguments).concat([])
                    );
                  }.bind(this)}
                  pagination={{
                    defaultPageSize: "",
                    onPageChange: function () {
                      return this.onPageChange.apply(
                        this,
                        Array.prototype.slice.call(arguments).concat([])
                      );
                    }.bind(this),
                    showSizeChanger: true,
                  }}
                />
              </NextP>
            </NextBlockCell>
          </NextBlock>
        </NextPage>
        <NextPage
          columns={12}
          headerDivider={true}
          placeholderStyle={{ gridRowEnd: "span 1", gridColumnEnd: "span 12" }}
          placeholder="页面主体内容：拖拽Block布局组件到这里"
          header={null}
          headerProps={{ background: "surface" }}
          footer={null}
          minHeight="100vh"
        >
          <NextBlock
            prefix="next-"
            placeholderStyle={{ height: "100%" }}
            noPadding={false}
            noBorder={false}
            background="surface"
            colSpan={12}
            rowSpan={1}
            childTotalColumns={1}
          >
            <NextBlockCell
              title=""
              primaryKey="472"
              prefix="next-"
              placeholderStyle={{ height: "100%" }}
              colSpan={1}
              rowSpan={1}
            />
          </NextBlock>
        </NextPage>
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
