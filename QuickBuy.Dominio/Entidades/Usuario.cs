using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Usuario : Entidade
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }

        /// <summary>
        /// Usuario pode ter um ou muito pedidos
        /// </summary>
        public virtual ICollection<Pedido> Pedidos { get; set; }

        public override void Validade()
        {
            LimparMensagemValidacao();
            if (string.IsNullOrEmpty(Email))
                AdicionarCritica("Email não Informado");
            if (string.IsNullOrEmpty(Senha))
                AdicionarCritica("Senha não Informada");
        }
    }
}
