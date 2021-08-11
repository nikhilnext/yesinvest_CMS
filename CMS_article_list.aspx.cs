using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class CMS_article_list : System.Web.UI.Page
{

   // public static string conn = System.Configuration.ConfigurationManager.ConnectionStrings["dbStringnew"].ConnectionString;
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [WebMethod(EnableSession = true)]
    public static string GetArticleListdata(string id)
    {

        string response = string.Empty;
        int a_id = 0;

        if (id != "")
        {
            a_id = Convert.ToInt32(id);
        }
        

        string DealJson = string.Empty;


        try
        {

           


            using (SqlConnection con = new SqlConnection(commonfunction.conn))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.CommandText = "dbo.GetArticleListdata";
                    cmd.Parameters.AddWithValue("@id", SqlDbType.Int).Value = a_id;

                    using (SqlDataAdapter adapter = new SqlDataAdapter(cmd))
                    {

                        DataSet ds = new DataSet();
                        adapter.Fill(ds);
                        DealJson = JsonConvert.SerializeObject(ds);
                    }
                }
            }

        }
        catch (Exception ex)
        {
            commonfunction.WriteLog("GetArticleListdata exception", ex.ToString(), DateTime.Now, DateTime.Now);
            return "Error 404";
        }
        return DealJson;
    }


    

    [WebMethod(EnableSession = true)]
    public static string ModifyArticleListdata(string user, string action,string article_id, string article_title, string article_shortdesc, string article_banner, string article_longdesc , string article_author)
    {

        string response = string.Empty;
        int id = Convert.ToInt32(article_id);

        try
        {
            string session = commonfunction.CheckCMS_Sesion(user);
            if (session != "true")
            {
                return "unuthorized";
            }


            using (SqlConnection con = new SqlConnection(commonfunction.conn))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.CommandText = "dbo.ModifyArticleListdata";
                    cmd.Parameters.AddWithValue("@action", SqlDbType.VarChar).Value = action;
                    cmd.Parameters.AddWithValue("@article_id", SqlDbType.Int).Value = id;
                    cmd.Parameters.AddWithValue("@article_title", SqlDbType.VarChar).Value = article_title;
                    cmd.Parameters.AddWithValue("@article_shortdesc", SqlDbType.VarChar).Value = article_shortdesc;
                    cmd.Parameters.AddWithValue("@article_banner", SqlDbType.VarChar).Value = article_banner;
                    cmd.Parameters.AddWithValue("@article_longdesc", SqlDbType.VarChar).Value = article_longdesc;
                    cmd.Parameters.AddWithValue("@article_author", SqlDbType.VarChar).Value = article_author;
                    con.Open();
                    int k = cmd.ExecuteNonQuery();
                    con.Close();
                    if (k > 0)
                    {
                        response = "success";
                    }
                    else
                    {
                        response = "error";

                    }

                   
                }
            }

        }
        catch (Exception ex)
        {
            commonfunction.WriteLog("ModifyArticleListdata exception", ex.ToString(), DateTime.Now, DateTime.Now);
            return "Error 404";
        }
        return response;
    }
}