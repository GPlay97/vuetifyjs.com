export default {
  header: 'Avatar',
  headerText: 'O componente `v-avatar` é utilizado para controlar o tamanho e o arredondamento da borda de imagens responsivas, tipicamente utilizadas para exibir fotos de perfil.',
  components: ['v-avatar'],
  examples: [{
    standard: {
      header: 'Exibição padrão',
      desc: 'O avatar possui um tamanho dinâmico que pode ser dimensionado para qualquer situação. Uma variação de **tile** está disponível para exibir um avatar sem borda arredondada.'
    },
    advanced: {
      header: 'Uso avançado',
      desc: 'Combinar um avatar com outros componentes permite que você crie belíssimas interfaces de usuário.'
    },
    iconAndText: {
      header: 'Ícone e texto',
      desc: 'Um avatar também aceita o componente `v-icon` ou texto. Misture e combine a funcionalidade para criar algo único.'
    }
  }]
}
