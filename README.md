## Flowa (플로와: 대화의 흐름) - 커뮤니티

### 📁 React Native 주요 컴포넌트 정리
`<Text>`<br/>
텍스트 출력

```
<Text>문구</Text>
```
<br/>

`StyleSheet` <br/>
스타일 객체 생성

```
const styles = StyleSheet.create({
   text: {
      fontSize: 20,
      color: 'blue'
   }
});
```
<br/>

`<View>` <br/>
레이아웃 컨테이너 (HTML의 div와 유사)

```
<View style={styles.container}>
   <Text>내용</Text>
</View>
```
<br/>

`<Image>` <br/>
이미지 표시

```
<Image source={{ uri: 'https://example.com/image.png' }} />
```
<br/>

`<SafeAreaView>` <br />
화면의 안전 영역에 맞춰 UI 표시

```
<SafeAreaView>
   <Text>안전 영역 내에서 표시</Text>
</SafeAreaView>
```
<br/>

`<ScrollView>` <br />
스크롤 가능한 뷰

```
 <ScrollView style={{ padding: 20 }}>
   
 </ScrollView>
```
<br />

`<TextInput>` <br />
텍스트 입력 필드

```
<TextInput
  style={styles.input}
  placeholder="여기에 입력하세요"
  value={value}
  onChangeText={setValue}
/>
```
<br />

`<Button>` <br/>
기본 버튼

```
<Button
  title="눌러보세요"
  onPress={() => Alert.alert('버튼이 눌렸습니다!')}
/>
```

---

### 📁 설치 패키지

| 패키지명                           | 설치 명령어                                      | 설명                                      | 
| ---------------------------------  | ----------------------------------------------- | ----------------------------------------------- |
| react-hook-form                    | `npm install react-hook-form`                   | 폼 상태 관리                  |
| react-native-safe-area-context     | `expo install react-native-safe-area-context`   | 노치/홈바 대응 안전 영역 관리                 |

### 📁 상태 관리

`useForm()`

라이브러리: react-hook-form
역할: 폼 상태(입력값, 유효성 검사, 에러, 제출 등)를 관리

```
const { register, handleSubmit, formState } = useForm();
```

<br />

`useSafeAreaInsets()`

라이브러리: react-native-safe-area-context
역할: 디바이스의 안전 영역 정보(노치, 홈 인디케이터 영역 등)를 가져옴

```
const insets = useSafeAreaInsets();
console.log(insets.top); // 상단 패딩 높이
```


---

### 📁 파일 역할

`app/_layout.tsx` <br/>
앱의 전반적인 레이아웃 정의

```
<Stack>
   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
   <Stack.Screen name="auth" options={{ headerShown: false }} />
   <Stack.Screen name="+not-found" />
 </Stack>
```

<br />

`app/(tabs)/_layout.tsx` <br/>
탭 네비게이션을 사용할 때, 탭 구조를 렌더링하는 역할

```
<Tabs
   screenOptions={{
     tabBarActiveTintColor: colors.ORANGE_600,
     headerShown: false,
   }}
 >
   <Tabs.Screen
     name="index"
     options={{
       title: "홈",
       tabBarIcon: ({ color, focused }) => (
         <Ionicons
           name={focused ? "home-sharp" : "home-outline"}
           size={25}
           color={color}
         />
       ),
     }}
   />
</Tabs>
```
