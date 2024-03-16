import { CategoryButton } from '@/components/category-button'
import { Header } from '@/components/header'
import { View, FlatList, SectionList, Text } from 'react-native'
import { useState, useRef } from 'react'
import { Link } from 'expo-router'

import { CATEGORIES, MENU} from "@/utils/data/products"
import { Product } from '@/components/product'



export default function Home(){
    const [category, setCategory] = useState(CATEGORIES[0])
    const sectionListRef = useRef<SectionList>(null)

    function handleCategorySelect(selectedCategory: string){
        setCategory(selectedCategory)

        const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)

        if(sectionListRef.current){
            sectionListRef.current.scrollToLocation({
                animated: true,
                sectionIndex,
                itemIndex: 0,
            })
        }

    }
    return(
        <View className= "flex-1 p-4">
            <Header title='Faça o seu pedido' cartQuantityIens={2}/>

            <FlatList 
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <CategoryButton  title={item} isSelected={item === category} onPress={() => handleCategorySelect(item)}/>
                )}
                horizontal
                className='max-h-10 mt-5'
                contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
                showsHorizontalScrollIndicator={false}
            />

            <SectionList 
                ref={sectionListRef}
                sections={MENU}
                keyExtractor={(item) => item.id}
                stickySectionHeadersEnabled={false}
                renderItem={({ item }) => (
                    <Link href={`/product/${item.id}`} asChild><Product data={item} /></Link>
                )}
                renderSectionHeader={({section: { title }}) => (
                    <Text className='font-heading mt-8 mb-3  text-xl text-white'>{title}</Text>
                )}
                className='flex-1 p-5'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 100}}
            />
        </View>
    )
}

