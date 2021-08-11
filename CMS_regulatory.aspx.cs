using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class CMS_regulatory : System.Web.UI.Page
{


   // public static string conn = System.Configuration.ConfigurationManager.ConnectionStrings["dbStringnew"].ConnectionString;
    protected void Page_Load(object sender, EventArgs e)
    {

    }


    [WebMethod(EnableSession = true)]
    public static string ModifySebidata(string user,int month, int begin, int during, int pending, string reason, int resolve)
    {

        string response = string.Empty;
       
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

                    cmd.CommandText = "dbo.ModifySebiData";
               
                    cmd.Parameters.AddWithValue("@month", SqlDbType.Int).Value = month;
                    cmd.Parameters.AddWithValue("@begin_month", SqlDbType.Int).Value = begin;
                    cmd.Parameters.AddWithValue("receive_month", SqlDbType.Int).Value = during;
                    cmd.Parameters.AddWithValue("@pending_month", SqlDbType.Int).Value = pending;
                    cmd.Parameters.AddWithValue("@reason", SqlDbType.VarChar).Value = reason;
                    cmd.Parameters.AddWithValue("@resolve_month", SqlDbType.Int).Value = resolve;
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
            commonfunction.WriteLog("Modify sebi data exception", ex.ToString(), DateTime.Now, DateTime.Now);
            return "Error 404";
        }
        return response;
    }
}