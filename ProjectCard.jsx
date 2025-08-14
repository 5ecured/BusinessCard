import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ProjectCard = ({ name, image }) => {
    return (
        <View>
            <Image
                source={image}
                style={styles.image}
            />
            <Text style={styles.name}>
                {name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        aspectRatio: 16 / 9,
        borderRadius: 20
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'dimgray',
        marginTop: 10
    }
})

export default ProjectCard