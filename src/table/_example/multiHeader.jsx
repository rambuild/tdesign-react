import React from 'react';
import { Table } from '@tencent/tdesign-react';

const data = [
  {
    platform: '公有',
    property: 'data',
    type: 'any[]',
    default: '[]',
    needed: 'Y',
    description: '数据源',
  },
  {
    platform: '公有',
    property: 'rowkey',
    type: 'String',
    default: '-1',
    needed: 'Y',
    description: '指定rowkey',
  },
];
const columns = [
  {
    title: '汇总属性',
    children: [
      {
        align: 'left',
        width: '100',
        minWidth: '100',
        className: 'test',
        ellipsis: true,
        Key: 'platform',
        title: '平台',
      },
      {
        title: '类型及默认值',
        children: [
          {
            align: 'left',
            width: '100',
            minWidth: '100',
            className: 'row',
            ellipsis: true,
            Key: 'type',
            title: '类型',
          },
          {
            align: 'left',
            width: '100',
            minWidth: '100',
            className: 'test4',
            ellipsis: true,
            Key: 'default',
            title: '默认值',
          },
          {
            align: 'left',
            width: '100',
            minWidth: '100',
            className: 'test3',
            ellipsis: true,
            Key: 'needed',
            title: '是否必传',
          },
        ],
      },
    ],
  },
  {
    title: '属性及说明',
    children: [
      {
        align: 'left',
        width: '100',
        minWidth: '100',
        className: 'test2',
        ellipsis: true,
        colKey: 'property',
        title: '属性',
      },
      {
        align: 'left',
        width: '100',
        minWidth: '100',
        className: 'row',
        ellipsis: true,
        colKey: 'description',
        title: '说明',
      },
    ],
  },
];

export default function TableExample() {
  return (
    <Table
      records={data}
      // height={100}
      bordered={true}
      // loading={true}
      columns={columns}
      rowKey="property"
    />
  );
}
