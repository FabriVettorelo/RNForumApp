import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Estilos para contenedor de pantalla
  container: {
    flex: 1,
    padding: 16,
  },

  // Estilos para títulos de posts
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  // Estilos para extracto de posts
  postExcerpt: {
    fontSize: 14,
    marginBottom: 16,
  },

  // Estilos para detalles de posts
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    backgroundColor:"grey",
    width:"100%",
    padding:15,
  },
  detailsBody: {
    fontSize: 16,
    marginBottom: 16,
    padding:15
  },
  detailsUserId: {
    fontSize: 14,
    color: 'white',
  },
  userIdContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding:15,
    backgroundColor:"grey",
    position:'absolute',
    bottom:0,
    width:"100%"
  },

  // Estilos para indicador de carga
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
  
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
    borderColor: "grey",
    borderWidth: 1
  },

  postContainer: {
    borderWidth: 1,
    borderColor: "grey",
    margin: 10,
    height: 150,
    padding: 10
  },

});

export default styles;