using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class create_lead : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [WebMethod(EnableSession = true)]
    public static string saveData(string fullname, string city, string email, string number, string state)
    {

        string response;
        
       

        try
        {
            using (SqlConnection con = new SqlConnection(commonfunction.conn))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.CommandText = "dbo.SaveDataContact";
                    cmd.Parameters.AddWithValue("@Fullname", SqlDbType.VarChar).Value = fullname;
                    cmd.Parameters.AddWithValue("@City", SqlDbType.VarChar).Value = city;
                    cmd.Parameters.AddWithValue("@Email", SqlDbType.VarChar).Value = email;
                    cmd.Parameters.AddWithValue("@Contact", SqlDbType.VarChar).Value = number;
                    cmd.Parameters.AddWithValue("@State", SqlDbType.VarChar).Value = state;

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
            commonfunction.WriteLog("saveData exception lead pass", ex.ToString(), DateTime.Now, DateTime.Now);

            return "Not Saved";
            //return ex.ToString();
        }
        return response;
    }
}