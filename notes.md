This application is a demo for feed application supported by studio 71.

First, you have to install `semantic-ui-react`, `semantic-ui-css` package with yarn or npm

```
yarn add semantic-ui-react
yarn add semantic-ui-css
```
```
npm install semantic-ui-react --save
npm install semantic-ui-css --save
```

Import css for semantic UI to App.js
```
import 'semantic-ui-css/semantic.min.css';
```

In home/index.js,
```
import {
    Icon,
    Container,
    Feed,
    Table
} from 'semantic-ui-react';
```

Then, you have to implement feed like this
```
<Feed.Event>
    <Feed.Label>
        {item.thumb_url_default || item.thumbnail ?
            <img src={item.thumbnail ? item.thumbnail : item.thumb_url_default} /> :
            <Icon disabled name='user' /> }
    </Feed.Label>
    <Feed.Content>
        <Feed.Summary>
            <Feed.User>{item.name}</Feed.User>
            <Feed.Date>{item.timeframe} Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
            <p>Message: {item.message}</p>
            <Table celled padded size='small'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Est Subs</Table.HeaderCell>
                        <Table.HeaderCell>Mod 7 days</Table.HeaderCell>
                        <Table.HeaderCell>CMS</Table.HeaderCell>
                        <Table.HeaderCell>Subscribers</Table.HeaderCell>
                        <Table.HeaderCell>Estimated Subscribers 30 days</Table.HeaderCell>
                        <Table.HeaderCell>Domain</Table.HeaderCell>
                        <Table.HeaderCell>Estimated Subscribers 7 days</Table.HeaderCell>
                        <Table.HeaderCell>Mod 30 days</Table.HeaderCell>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>{item.est_subs}</Table.Cell>
                        <Table.Cell>{item.mod_7_days}</Table.Cell>
                        <Table.Cell>{item.cms}</Table.Cell>
                        <Table.Cell>{item.subscribers}</Table.Cell>
                        <Table.Cell>{item.estimated_subscribers_30_days}</Table.Cell>
                        <Table.Cell><Icon disabled name='youtube' size='huge' color='red' /></Table.Cell>
                        <Table.Cell>{item.estimated_subscribers_7_days}</Table.Cell>
                        <Table.Cell>{item.mod_30_days}</Table.Cell>
                        <Table.Cell>{item.type}</Table.Cell>
                        <Table.Cell>{item.title}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Feed.Extra>
        <Feed.Meta>
            <Feed.Like>
                <Icon name='like' />
                    4 Likes
            </Feed.Like>
        </Feed.Meta>
    </Feed.Content>
</Feed.Event>
```