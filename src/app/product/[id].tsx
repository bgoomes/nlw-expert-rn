import { View, Image, Text } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { PRODUCTS } from "@/utils/data/products"
import { formatCurrency } from "@/utils/fuctions/format.currency"

import { Feather } from "@expo/vector-icons"
import { Button } from "@/components/button"
import { LinkButton } from "@/components/link-button"
 
export default function Product(){
    const { id } = useLocalSearchParams()

    const product = PRODUCTS.filter((item) => item.id === id)[0]
    return(
        <View className="flex-1">
            <LinkButton title="<--" href="/" />
            <Image source={product.cover}  className="h-52 w-full" resizeMode="cover"/>

            <View className="p-5 mt-8 flex-1">
                <Text className="text-lime-400 text-2xl font-heading my-2">
                    {formatCurrency(product.price)}
                </Text>
                <Text className="text-slate-400 font-body text-base leading-6 mb-6">
                    {product.description}
                </Text>

                {product.ingredients.map((igrediente) => (
                    <Text key={igrediente} className="text-slate-400 font-body text-base leading-6">{"\u2022"}  {igrediente}</Text>
                ))}
            </View>

            <View className="p-5 pb-8 gap-5">
                <Button>
                    <Button.Icon>
                        <Feather  name="plus-circle" size={20}/>
                    </Button.Icon>
                    <Button.Text>
                        Adicionar ao pedido
                    </Button.Text>
                </Button>

                
            </View>
        </View>
        
    )
}