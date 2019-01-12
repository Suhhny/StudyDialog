React-Native
==================

***Component***

* 상단바

```jsx
<SafeAreaView>
	<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
</SafeAreaView>
```

```jsx
<TouchableHighlight onPress={this.onPress}>
	<View>
		<Text>TouchableHighlight</Text>
	</View>
</TouchableHighlight>
```

```jsx
<FlatList data={[ {key: 'Devin'},
				{key: 'Jackson'},
				{key: 'James'},
				{key: 'Joel'},
				{key: 'John'},
				{key: 'Jillian'},
				{key: 'Jimmy'},
				{key: 'Julie'} ]} renderItem={({item}) => <Text>{item.key}</Text>}
/>
```

```jsx
<SectionList sections={[ {title: 'A', data: ['Devin']},
						{title: 'B', data: ['Jackson', 'James', 'Joel', 'John']},
						{title: 'C', data: ['Jillian', 'Jimmy', 'Julie']} ]}
						renderItem={({item, index}) => <Text key={index}>{item}</Text>}
						renderSectionHeader={({section}) => <Text style={{fontWeight: 'bold'}}>{section.title}</Text>}
						keyExtractor={(item, index) => item+index}
/>
```


***API***

* AsyncStorage

```javascript
import { AsyncStorage } from 'react-native';

const user = await AsyncStorage.getItem('KEY');
if(user){
	goToHome();
}else{
	goToAuth();
}
```

***Screen LifeCycle***

```javascript
componentDidAppear() {
	this.setState({
		text: 'component did appear!'
	});
}

componentDidDisappear() {
	this.setState({
		text: 'component did disappear'
	});
}
```


***react-native-navigation***

* First screen once the app is lauched

```javascript
Navigation.events().registerAppLaunchedListener( () => {
	Navigation.setRoot({
		root: {
			component: {
				name: 'Initial'
			}
		}
	})
})
```

* Register all screens

```javascript
export const registerScreens = () => {
	Navigation.registerComponent('Home', () => Home)
	Navigation.registerComponent('Initial', () => Initial)
	Navigation.registerComponent('SignUp', () => SignUp)
	Navigation.registerComponent('SignIn', () => SignIn)
}
```

* Bottom Tabbar

```javascript
export const goToAuth = () => Navigation.setRoot({
	root: {
		bottomTabs: {
			children: [
				{	component: {
						name: 'SignIn',
						options: {
							bottomTab: {
								text: '야옹'
							}
						}
					}
				},
				{	component: {
						name: 'SignUp',
						options: {
							bottomTab: {
								text: '멍멍'
							}
						}
					}
				}
			]
		}
	}
})
```

* method

```
나중에,,
```


