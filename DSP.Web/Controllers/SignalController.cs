using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DSP.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Signal")]
    public class SignalController : Controller
    {
        [HttpGet("[action]")]
        public SignalModel CreateSignal(double freq, double ampl)
        {
            var result = new SignalModel();
            var data = new List<double>();
            var rand = new Random();

            for (int j = 0; j < 100000; j++)
            {
                data = new List<double>();
                result.Labels = new List<string>();
                for (int i = 0; i < 200; i++)
                {
                    var n = ampl * Math.Sin(Math.PI * freq * i * 0.001);
                    n += rand.NextDouble();
                    data.Add(n);
                    result.Labels.Add(i.ToString());
                }
            }


            result.Data = data;
            return result;
        }
    }

    public class SignalModel
    {
        public SignalModel()
        {
            this.Data = new List<double>();
            this.Labels = new List<string>();
        }

        public ICollection<double> Data { get; set; }

        public ICollection<string> Labels { get; set; }
    }
}