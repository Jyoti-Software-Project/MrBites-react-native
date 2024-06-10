import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    homeContainer: {
        width: "100%",
        height: "92%",
        margin: 0,
        backgroundColor: "transparent",
    },
    carouselContainer: {
        width: "100%",
        height: "auto",
        marginBottom: 20,
        marginHorizontal: 0,
    },
    title: {
        color: "#ffffff",
        fontSize: 26,
    },
    searchContainer: {
        width: "90%",
        height: 50,
        marginHorizontal: 20,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    searchBox: {
        width: "85%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        opacity: 0.9,
        backgroundColor:"#c0c0c0",
    },
    icon: {
        width: "15%",
        position: "relative",
        textAlign: "center",
        backgroundColor: "transparent",
    },
    searchInput: {
        width: "85%",
        height: 42,
        flexDirection: "row",
        fontSize: 19,
        backgroundColor: "transparent",
    },
    button: {
        width: 41,
        height: 41,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        transform: [{rotate: '45deg'}],
        backgroundColor: "#e60023",
    },
    listContainer: {
        marginBottom: 20,
        paddingHorizontal: 8
    },
    foodTypeContainer: {
        width: "auto",
        height: 50,
        marginRight: 20,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
    },
    foodTypeText: {
        marginLeft: 10,
        fontSize: 18,
    },
    foodSelectContainer: {
        width: "auto",
        marginRight: 20,
        marginHorizontal: 10,
        paddingHorizontal: 40,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: "#fafafa",
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0,
        shadowRadius: 3,
    },
    foodImage: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 25,
        textTransform: "capitalize",
    },
    name: {
        fontSize: 18,
    },
    rating: {
        fontSize: 16,
    },
    amount: {
        fontSize: 22,
        color: "#e60023",
    },
    footerContainer: {
        width: "100%",
        height: "8%",
        marginHorizontal: 0,
        fontSize: 22,
        opacity: 0.9,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom: 0,
    },
});

export default styles;